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
        script1Result = ''
        script2Result = ''
    }
    stages {
        stage("Ejecutar Script 1") {
            steps {
                bat "node jenkinsScripts/stage1.js ${params.name}"
                script {
                    script1Result = sh(returnStdout: true, script: 'echo $?').trim()
                }
            }
        }
        stage("Ejecutar Script 2") {
            steps {
                bat "node jenkinsScripts/stage2.js ${params.surname}"
                script {
                    script2Result = sh(returnStdout: true, script: 'echo $?').trim()
                }
            }
        }
        stage("Imprimir Resultado") {
            steps {
                bat "node jenkinsScripts/stage3.js ${script1Result} ${script2Result}"
            }
        }
    }
}

