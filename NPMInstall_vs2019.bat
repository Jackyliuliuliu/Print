


if "%1"=="" goto dev
if "%1"=="builder" goto builder

goto END

:dev



%~d0
cd %~p0

"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\CommonExtensions\\Microsoft\\TeamFoundation\\Team Explorer\\TF.exe" checkout "./package.json"
"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\CommonExtensions\\Microsoft\\TeamFoundation\\Team Explorer\\TF.exe" checkout "./package-lock.json"
call npm install



goto END


:builder

attrib -r ./package.json
attrib -r ./package-lock.json
call npm install


:END