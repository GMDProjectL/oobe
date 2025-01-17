import subprocess
import time


def wait_for_server():
    while True:
        try:
            subprocess.check_output(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', 'http://localhost:5173'])
            break
        except subprocess.CalledProcessError:
            time.sleep(1)

def launch_electron():
    subprocess.run(['electron33', 'http://localhost:5173'])

def main():
    wait_for_server()
    launch_electron()

if __name__ == "__main__":
    main()