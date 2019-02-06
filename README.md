## Tradie [![Maintainability](https://api.codeclimate.com/v1/badges/48e1d9356277eeca3ffe/maintainability)](https://codeclimate.com/github/gmrsagar/sw-solution/maintainability)


# How to run this app

Please make sure you have installed Docker on your machine. If you do not, they offer easy to install binaries ([Mac](https://docs.docker.com/docker-for-mac/install/)) ([Windows](https://docs.docker.com/docker-for-windows/install/)).


Run `docker-compose up -d`
* UI should run at http://localhost:3000 
* Server should run at http://localhost:8080
* And, MySQL should run at localhost:3306
    * The username is `root`
    * The password is `hipages`

If at any point you want to refresh the database, you can stop the Docker containers (`docker-compose down`) and start them again
