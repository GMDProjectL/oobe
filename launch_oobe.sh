cd "$(dirname "$0")"
./start_server.sh & python wait_for_electron.py