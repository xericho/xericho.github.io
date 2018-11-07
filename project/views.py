from flask import render_template
from app import app, pages


@app.route('/')
def home():
    return render_template('index.html')


# @app.route('/<path:path>/')
# def page(path):
#     # Path is the filename of a page, without the file extension
#     # e.g. "first-post"
#     page = pages.get_or_404(path)
#     return render_template('page.html', page=page)
