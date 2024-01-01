from flask import Flask, render_template, request
import pandas as pd
import sqlite3
import os

app = Flask(__name__)

# 连接到数据库
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

if __name__ == '__main__':
    app.run(port=5001)
    # app.run # app.run(port=5001)  # 默认端口 http://127.0.0.1:5000/
