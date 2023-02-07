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
        stage('Ejecutar script 1') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScripts/stage1.js %param1%", returnStdout: true).trim()
                    if (result == "correct") {
                        stage1Result = "correct"
                    } else {
                        stage1Result = "incorrect"
                    }
                }
            }
        }
        stage('Ejecutar script 2') {
            steps {
                script {
                    def result = bat(script: "node jenkinsScripts/stage2.js %param2%", returnStdout: true).trim()
                    if (result == "correct") {
                        stage2Result = "correct"
                    } else {
                        stage2Result = "incorrect"
                    }
                }
            }
        }
        stage('Resultado final') {
            steps {
                script {
                    if (stage1Result == "correct" && stage2Result == "correct") {
                        echo "El proyecto va viento en popa!!!"
                    } else if (stage1Result == "incorrect" && stage2Result == "incorrect") {
                        echo "Esto pinta muy mal"
                    } else {
                        echo "Alguna de las dos stages ha fallado"
                    }
                }
            }
        }
    }
}

