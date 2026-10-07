pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                url: ' https://github.com/eris081/expense-bill-tracker.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t expense-bill-app -f DockerFile .'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s.yaml'
            }
        }
        stage('Verify Deployment') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get services'
            }
        }
    }
}
