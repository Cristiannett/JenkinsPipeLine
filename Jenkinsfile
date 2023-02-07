pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    parameters {
        string(name: 'name', defaultValue: '', description: 'Cual es el nombre del pintor de la Mona Lisa')
        string(name: 'surname', defaultValue: '', description: 'Cual es el apellido del pintor de la Mona Lisa?')
    }
    environment {
        result1 = ''
        result2 = ''
    }
    stages {
        stage("Stage 1") {
            steps {
                bat(script: "./jenkinsScripts/stage1.bat", returnStdout: true) {
                    env.result1 = returnStdout
                }
            }
        }
        stage("Stage 2") {
            steps {
                bat(script: "./jenkinsScripts/stage2.bat", returnStdout: true) {
                    env.result2 = returnStdout
                }
            }
        }
        stage("Stage 3") {
            steps {
                bat(script: "./jenkinsScripts/stage3.bat", returnStdout: true)
                echo returnStdout
            }
        }
    }
}

