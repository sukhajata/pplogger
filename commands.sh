#go
export PATH=$PATH:~/go/bin

protoc --go_out=plugins=grpc:. *.proto

go install

#python
pip install grpcio-tools

python -m grpc_tools.protoc -I . --python_out=python --grpc_python_out=python logger-service.proto