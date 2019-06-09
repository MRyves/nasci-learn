#!/usr/bin/env bash

set -e
#set -o xtrace

function runCommand {
    echo
    echo "$1"
    echo
    eval $1
}

function prep_term {
    unset term_child_pid
    unset term_kill_needed
    trap 'handle_term' TERM INT
}

function handle_term {
    if [[ "${term_child_pid}" ]]; then
        kill -TERM "${term_child_pid}" 2>/dev/null
    else
        term_kill_needed="yes"
    fi
}

function wait_term {
    term_child_pid=$!
    if [[ "${term_kill_needed}" ]]; then
        kill -TERM "${term_child_pid}" 2>/dev/null
    fi
    wait ${term_child_pid}
    trap - TERM INT
    wait ${term_child_pid}
}

prep_term
runCommand "java -Dmockserver.enableCORSForAllResponses='true' -Dmockserver.initializationJsonPath='../expectations.json' -Dfile.encoding=UTF-8 -jar /mnt/c/Users/yvesh_000/IdeaProjects/agnasci/env/docker/standalone-mock/mockserver-netty-5.5.4-jar-with-dependencies.jar -logLevel DEBUG -serverPort 8888 &"
wait_term
