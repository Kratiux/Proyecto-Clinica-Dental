#!bin/bash

echo "Running application in PRODUCTION mode"
 
env="PRODUCTION"
current_location=$PWD;

stop_services(){
        # sudo systemctl stop mysql
        sudo systemctl stop nginx
        sudo fuser -k 21001/tcp
        sudo fuser -k 21000/tcp  
}

preparing_all() {
        stop_services
}

start_services(){
        # sudo systemctl start mysql
        sudo systemctl start nginx
}

run_frontend() {
        echo "Executing frontend in background"
        cd ./backend/src/FrontendLocalRunner
        npm i
        sudo fuser -k 21001/tcp
        npm run startFrontend &
        cd $current_location
}

run_backend() {
        echo "Executing backend in background"
        cd ./backend
        npm i
        sudo fuser -k 21000/tcp
        npm run startBackend &
        cd $current_location
}

run_all() {
        start_services
        run_frontend
        run_backend
}

preparing_all
run_all