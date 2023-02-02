pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    stages {
        stage('linter') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                bat 'node index.js'
            }
        }
    }
}
