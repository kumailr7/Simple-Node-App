pipeline {
    agent any
    environment {
        CI = 'true'
        docker=credentials('docker')
    }
    stages {
    //     stage('Build') {
    //         steps {
    //             sh 'npm install'
    //         }
    //     }
    //     stage('Test') {
    //         steps {
    //             sh './test.sh'
    //         }
    //     }
        // stage('Deliver') {
        //     steps {
        //         sh './deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './kill.sh'
        //     }
        // }

        stage('Build the image') {
            steps {
                sh "docker build -t kumail/node-app:$BUILD_NUMBER ."
            }
        }

        stage('Login in the Container Registry'){
            steps {
                sh "echo $docker_PSW | docker login -u $docker_USR --password-stdin"
            }
        }

        stage('push the image'){
            steps {
                sh "docker push kumail/node-app:$BUILD_NUMBER"
            }
        }

        stage("Deploying the application") {
            steps {
                sh "docker compose up -d"
            }
        }

        stage("Delete the image") {
            steps {
                sh "docker rmi -f kumail/node-app:$BUILD_NUMBER"
            }
        }
    }
}
