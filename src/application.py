from flask import Flask, flash, render_template, request, session, redirect, url_for
import flask_login
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, sessionmaker
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
from functools import wraps
import json

#------Configs------#
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True 
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False 
app.config["SESSION_TYPE"] = "filesystem"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///./data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

login_manager = flask_login.LoginManager()
login_manager.init_app(app)

MySession = sessionmaker()
Base = declarative_base()

engine = create_engine('sqlite:///./data.db')
Base.metadata.create_all(bind=engine)
MySession.configure(bind=engine)
session = MySession()
Session(app)

week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
#------------------#

#-------Routes-------#
@app.route("/gettodos", methods=["POST"])
def gettodos():
    #should do what it's supposed to do I think
    if request.method == "POST":
        day = request.form.get('day')
        print(day)
        todos = Todo.findTodo('day', day)
        print('finaltodos' +  json.dumps(todos))
        return json.dumps(todos)

@app.route("/todo", methods=["POST"])
def todo():
    if request.method == "POST":
        #get data
        todotext = request.form.get('todotext')
        day = request.form.get('day')

        #check if data is valid
        if len(todotext) == 0 or len(day) == 0:
            return
        
        #add todo to database
        Todo(todotext, day)

        return '200'      
#--------------------#

#-------Todo Class--------#
class Todo(Base):
    __tablename__ = 'Todo'
    id = Column(Integer, primary_key=True)
    todotext = Column(String, nullable=False)
    day = Column(String, nullable=False)
    done = Column(Boolean, default=False)

    def __init__(self, todotext, day):
        self.todotext = todotext
        self.day = day
        Todo.addTodo(self)
    
    def addTodo(self):
        session.add(self)
        session.commit()
    
    def removeTodo(self):
        session.delete(self)
        session.commit()
    
    def findTodo(Type, Value):
        Type = str.lower(Type)
        if (Type == 'day'):
            mytodos = []
            with MySession() as sess:
                todos = sess.query(Todo).filter_by(day = Value).all()
                print('todos: ' + str(todos))
                for todo in todos:
                    mytodos.append(Todo.formatTodo(todo))
                print('mytodos:' + str(mytodos))
                return mytodos
        
        if (Type == 'id'):
            with MySession() as sess:
                todo = sess.query(Todo).filter_by(id = Value).first()
        
            return todo
    
    def moveToNextDay(self):
        return

    def formatTodo(self):
        dic = {
            'id' : str(self.id),
            'todotext' : str(self.todotext),
            'day' : str(self.day),
            'done' : str(self.done)
        }
        return dic
  
    def allTodos():
        todo_list = []
        for todo in session.query(Todo).all():
            todo_list.append(todo.formatTodo()) 
        return todo_list

app.run(debug=True)