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
        stage('Script 1') {
            steps {
                script {
                    def result = bat(script: './jenkinsScripts/stage1.bat', returnStatus: true)
                    if (result == 0) {
                        result1 = 'success'
               } else {
                        result1 = 'fail'
                    }
                }
            }
        }
        stage('Script 2') {
            steps {
                script {
                    def result = bat(script: './jenkinsScripts/stage2.bat', returnStatus: true)
                    if (result == 0) {
                        result1 = 'success'
               } else {
                        result1 = 'fail'
                    }
                }
            }
        }
        stage('Print Results') {
            steps {
                script {
                    if (result1 == 'success' && result2 == 'success') {
                        println 'El proyecto va viento en popa!!!'
               } else if (result1 == 'fail' || result2 == 'fail') {
                        println 'Alguna de las dos stages ha fallado'
               } else {
                        println 'Esto pinta muy mal'
                    }
                }
            }
        }
    }
}

