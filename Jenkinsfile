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
        STAGE1_RESULT = ''
        STAGE2_RESULT = ''
    }
    stages {
        stage('Stage 1') {
            steps {
                bat 'jenkinsScripts\\stage1.js $name'
                env.STAGE1_RESULT = bat(returnStdout: true, script: 'echo %errorlevel%').trim()
            }
        }
        stage('Stage 2') {
            steps {
                bat 'jenkinsScripts\\stage2.js $surname'
                env.STAGE2_RESULT = bat(returnStdout: true, script: 'echo %errorlevel%').trim()
            }
        }
        stage('Final Stage') {
            steps {
                if (env.STAGE1_RESULT == '0' && env.STAGE2_RESULT == '0') {
                    echo 'El proyecto va viento en popa!!!'
                } else if (env.STAGE1_RESULT == '0' || env.STAGE2_RESULT == '0') {
                    echo 'Alguna de las dos stages ha fallado'
                } else {
                    echo 'Esto pinta muy mal'
                }
            }
        }
    }
}

