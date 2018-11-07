# -*- coding: utf-8 -*-

from flask import Flask, render_template, url_for
# from flask_flatpages import FlatPages
# from flask_frozen import Freezer

app = Flask(__name__)
# app.config.from_pyfile('settings.py')
# pages = FlatPages(app)
# freezer = Freezer(app)


@app.route('/')
def home():
	return render_template('index.html')


if __name__ == '__main__':
    # port = int(os.environ.get('PORT', 5000))
    # app.run(host='0.0.0.0', port=port)

	app.run(debug=True)