set build_output_dir=%~dp0..\AICardiac_Webapp_xp\
set build_origin_dir=dist\AdvApp-Angular-xp


if "%1"=="" goto dev
if "%1"=="builder" goto builder

goto END

:dev

%~d0
cd %~p0

for %%I in (%build_output_dir%,%build_origin_dir%) do ( 
forfiles /P %%I /M * /C "cmd /c if @isdir==FALSE del @file"
forfiles /P %%I /M * /C "cmd /c if @isdir==TRUE rmdir /S /Q @file"
)

call NPMInstall_vs2019.bat
call ..\AppBase\copy_all_to_angular-xp.bat
call ng build AdvApp-Angular-xp --aot=true --prod

for %%I in (%build_origin_dir%) do ( 
xcopy %%I %build_output_dir% /y /s /r
)

xcopy .\web.config %build_output_dir% /y /k /r

goto END




:builder

%~d0
cd %~p0

for %%I in (%build_output_dir%,%build_origin_dir%) do ( 
forfiles /P %%I /M * /C "cmd /c if @isdir==FALSE del @file"
forfiles /P %%I /M * /C "cmd /c if @isdir==TRUE rmdir /S /Q @file"
)

call NPMInstall_vs2019.bat builder
call ..\AppBase\copy_all_to_angular-xp.bat
call ng build AdvApp-Angular-xp --aot=true --prod

for %%I in (%build_origin_dir%) do ( 
xcopy %%I %build_output_dir% /y /s /r
)



:END
