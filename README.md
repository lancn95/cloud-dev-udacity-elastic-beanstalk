# Cloud-Developer-Udacity-Elastic-Beanstalk
***

## Hi Reviewer. 
My name is Kevin Cat Ngoc Lan. 
You can see all my results vie screenshot.docx. Thank you for spending time to review my project
####
## Install eb cli (for window OS)
### Step 1: Install python version 3.11.6 

[I'm an python download link](https://www.python.org/downloads/windows/)
```shell
python --version
pip --version
```
An issue I have already encounter: https://stackoverflow.com/questions/77401730/modulenotfounderror-no-module-named-imp

The Solution is change python version: https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html#platforms-supported.python
### Step 2: Intall awscli / awsebcli 
```shell
pip install awscli
pip install awsebcli
```
### Step 3: Follow teacher's instruction in the course. Use 
```shell
eb deploy
```
for deploy a new version

## FilterImages
```bash
curl --location 'http://cloud-dev-elastic-beanstalk-dev.us-west-2.elasticbeanstalk.com/filteredImage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg'
```
![About to upload](upload.png)


## Upload File


```bash
curl --location 'http://exercise-7-authentication-dev.us-east-1.elasticbeanstalk.com/images/' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzI1Njk4MzU2LCJleHAiOjE3MjU2OTg3MTZ9.Byv6H9MKYhcZZrWGgYjpE78jrHXg8L6t4lZzn6MWsAAEEGA69BunZOoquJ5NJ0JreRjwYshRBgWoia0-0W4bz294yORxDvDigkc7ABeqwbUeFkdMorYVqI090hfCm9F9jSuagTq14keyFCzLn0r_31JT3XHV-v3ZD6qKsmnaD4kZNkjgFrEhi5mpWH3I2zE_ukk1x2giEEh0MdJ9VXC1JdEVmqVCHdYXbhB31zbH34iNtnjJ6g4Jt9thqFXqZk5OCZ6GKmSSa6rtHWqegNhG02kQQP2S5X3MGlCq56t3Q5YVTAdte5NkG8wgYFFX3RJXy8U8SRKOIsVGwOWyJC0_Q54mNZIJjWbCp7utX69js1Dh5aG9gXX8AEiMTohN5w2WI8Jj26LMU8X6nV7JGf6rH93Xcd439jUqmtbVXmBFuAvDBB1mT1tkd0E086jnVO6e_4zuDC9XDo3MhFahv07MmSBFZH4DpdCXftcRMVWU7L-JvOPdlTDrYriQkB5Qo7JrA8NAWhym0FAwLpIZeWin5a8EWW0TAbCWJ9Y-mgdlJ5d5XjdMV1bbHqsISl6gHdI6XEm0Rftv96Kf7N7WKCipjp1BnIfuzOgUO4H8o19ort9HvuTkJRuf4K0TA6pslxYY_rcD2lVC1WSI570ShUj9CZiDKDQ2MVObEcP7S_-r4bA' \
--form 'file=@"/C:/Users/catng/Downloads/icon_4.png"'
```
![About to upload](uploadImg.png)

## Download File
### After upload a document successfully the response is a key 
### Pass the key to request param to get image which you uploaded
```bash
curl --location 'http://exercise-7-authentication-dev.us-east-1.elasticbeanstalk.com/images/?key=1725698371061_file_icon_4.png' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzI1Njk4MzU2LCJleHAiOjE3MjU2OTg3MTZ9.Byv6H9MKYhcZZrWGgYjpE78jrHXg8L6t4lZzn6MWsAAEEGA69BunZOoquJ5NJ0JreRjwYshRBgWoia0-0W4bz294yORxDvDigkc7ABeqwbUeFkdMorYVqI090hfCm9F9jSuagTq14keyFCzLn0r_31JT3XHV-v3ZD6qKsmnaD4kZNkjgFrEhi5mpWH3I2zE_ukk1x2giEEh0MdJ9VXC1JdEVmqVCHdYXbhB31zbH34iNtnjJ6g4Jt9thqFXqZk5OCZ6GKmSSa6rtHWqegNhG02kQQP2S5X3MGlCq56t3Q5YVTAdte5NkG8wgYFFX3RJXy8U8SRKOIsVGwOWyJC0_Q54mNZIJjWbCp7utX69js1Dh5aG9gXX8AEiMTohN5w2WI8Jj26LMU8X6nV7JGf6rH93Xcd439jUqmtbVXmBFuAvDBB1mT1tkd0E086jnVO6e_4zuDC9XDo3MhFahv07MmSBFZH4DpdCXftcRMVWU7L-JvOPdlTDrYriQkB5Qo7JrA8NAWhym0FAwLpIZeWin5a8EWW0TAbCWJ9Y-mgdlJ5d5XjdMV1bbHqsISl6gHdI6XEm0Rftv96Kf7N7WKCipjp1BnIfuzOgUO4H8o19ort9HvuTkJRuf4K0TA6pslxYY_rcD2lVC1WSI570ShUj9CZiDKDQ2MVObEcP7S_-r4bA'
```
![About to download](downloadImg.png)