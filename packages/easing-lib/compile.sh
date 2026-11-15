#!/bin/sh

develop(){
    echo "Develop Mode";
    npm run build
}

killBy(){
    ps auxwwww | grep $1 | grep -v grep | awk '{print $2}' | xargs -I{} kill -9 {}
}

stop(){
    DIR="$( cd "$(dirname "$0")" ; pwd -P )"
    killBy ${DIR}/node_modules/.bin/babel
}

watchTest () {
    stop
    echo "Watch Test mode"
    npm run build:es -- --watch &
    bun test --watch &
}

case "$1" in
  watch)
    watch 
    ;;
  watchTest)
    watchTest
    ;;
  stop)
    stop 
    ;;
  *)
    develop
    exit
esac

exit $?
