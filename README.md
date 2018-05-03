# sumServer
----------------
This Sum server is a small TCP services that listens on one socket (27877) for the incoming data
(numbers 0...20), and sum all the valid inputs within a second (1000ms) to generate a sum result,
then write to another socket (27878) the sum result is sent to any client listening to that port.

## Getting Started
prerequisites: sockets.io
install sockets express

## installing
npm install --save express@4.15.2

## Authors
- Leonardo Novoa

