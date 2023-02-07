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
    triggers {
        pollSCM('H */4 * * 1-5')
    }
    stages {
        stage('Stage1') {
            steps {
                script {
                    script1Result = bat (script: "node stage1.js ${params.name}", returnStdout: true).trim()
                }
            }
        }
        stage('Stage2') {
            steps {
                script {
                    script2Result = bat (script: "node stage2.js ${params.surname}", returnStdout: true).trim()
                }
            }
        }
        stage('Stage3') {
            steps {
                script {
                    if (script1Result == 'correcto' && script2Result == 'correcto') {
                        echo 'El proyecto va viento en popa!!!'
          } else if (script1Result == 'incorrecto' || script2Result == 'incorrecto') {
                        echo 'Alguna de las dos stages ha fallado'
          } else {
                        echo 'Esto pinta muy mal'
                    }
                }
            }
        }
    }
}

