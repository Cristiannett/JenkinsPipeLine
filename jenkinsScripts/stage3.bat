stage3.bat:
@echo off
if "%result1%" == "failure" if "%result1%" == "failure" (
    echo Esto pinta muy mal
) else (
    echo Alguna de las dos stages ha fallado
)
if "%result2%" == "success" if "%result2%" == "success" (
    echo El proyecto va viento en popa!!!
)
                