cmd /C js-beautify -f %1 -r -s 1 -c \t -a --space-after-named-function -n
npx eslint %1 --fix