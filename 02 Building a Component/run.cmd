CALL mklink /J node_modules ..\node_modules
CALL node_modules/.bin/tsc.cmd
CALL node_modules/.bin/sjs.cmd
