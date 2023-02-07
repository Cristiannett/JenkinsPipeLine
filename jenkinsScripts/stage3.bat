stage3.bat:
@echo off
if "%stage1Result%" == "failure" if "%stage2Result%" == "failure" (
    echo Esto pinta muy mal
) else (
    echo Alguna de las dos stages ha fallado
)
if "%stage1Result%" == "success" if "%stage2Result%" == "success" (
    echo El proyecto va viento en popa!!!
)
                