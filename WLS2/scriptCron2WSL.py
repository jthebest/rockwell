import os
from crontab import CronTab
import requests

def job(url):
    try:
        response = requests.get(url)
        print('Ping Successful!')
        print('Headers:')
        print(response.headers)
        print('First 1000 characters of the response:')
        print(response.text[:1000])
    except Exception as e:
        print(f'An error occurred: {e}')

def schedule_job(cron_expression, url):
    with CronTab(user='username') as cron:
        job = cron.new(command='python /path/to/your/script.py')
        job.setall(cron_expression)

# Replace 'cron_expression' and 'url' with your values
