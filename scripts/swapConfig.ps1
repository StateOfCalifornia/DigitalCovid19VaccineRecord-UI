$configEnv = $env:configEnv
$config_source = "$env:System_DefaultWorkingDirectory\_$env:Build_DefinitionName\drop\config\config.$configEnv.js"
$config_dest = "$env:System_DefaultWorkingDirectory\_$env:Build_DefinitionName\drop\build\config.js"

Copy-Item -Path $config_source -Destination $config_dest 