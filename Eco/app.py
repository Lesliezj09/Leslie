from flask import Flask, render_template, request
import pandas as pd
import sqlite3
import os

app = Flask(__name__)

# 连接到数据库
conn = sqlite3.connect('grades_database.db', check_same_thread=False)
cursor = conn.cursor()

# 主页路由
@app.route('/')
def index():
    return render_template('index.html')

# 查询函数
def query_score_by_name(name):
    try:
        name = name.lower()
        cursor.execute("SELECT * FROM grades WHERE LOWER(name)=?", (name,))
        result = cursor.fetchone()

        if result:
            print(f"{result[1]} 的成绩是 {result[2]}")
            result_string = f"<div style='text-align: center;'>{result[1]} <br> 成绩: {result[2]} <br> 评价: {result[3]}</div>" if len(result) > 3 else f"找到 {result[1]} 的成绩，但未找到评价信息"
            return result_string.replace('\n', '<br>')
        else:
            return f"找不到学生 {name} 的信息"
    except Exception as e:
        return f"发生错误: {e}"

# 查询路由
@app.route('/query', methods=['GET', 'POST'])
def query():
    if request.method == 'POST':
        query_name = request.form['name']
        result = query_score_by_name(query_name)
        return render_template('index.html', result=result)

    # 如果是 GET 请求，可以选择返回一个空白页面或其他信息
    return render_template('index.html', result=None)




if __name__ == '__main__':
    app.secret_key = '920909' # 配置安全密钥
    # app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'default_secret_key')
    # 使用 os.environ.get 来从环境变量中获取密钥：通过设置环境变量 FLASK_SECRET_KEY 来指定密钥；如未设置，将使用 'default_secret_key' 作为备用密钥
    # app.run(port=5001)
    # app.run # app.run(port=5001)  # 默认端口 http://127.0.0.1:5000/
    app.run(host='0.0.0.0')  # 允许同一局域网内查询

