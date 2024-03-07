import os
import requests

def jobScrap(url):
    try:
        response = requests.get(url)
        print('Ping Successful!')
        print('Headers:')
        print(response.headers)
        print('First 1000 characters of the response:')
        print(response.text[:1000])
    except Exception as e:
        print(f'An error occurred: {e}')

# Replace 'url' with your values
jobScrap(* * * * *)
