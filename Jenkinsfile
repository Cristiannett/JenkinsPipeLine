pipeline {
    agent any
    tools {
        node'node'
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
                bat 'npm node index.js'
            }
        }
    }
}
