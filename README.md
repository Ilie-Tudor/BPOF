### Team: Blockain
- Ilie Tudor
- Runceanu Daria
- Filote Serban
- Culda Mara
- Rohatin Andrei
### Aplication name: BPOF
Description:
Bpof is a NFT minting and stacking application, that provides the users with the ability to connect with 4 different wallets. The blockchain smart contracts are deployed on Elrond dev network and the stacking functionality is provided by a custom made server, assigned with the task of random percent generation. 
The main technologies used were nextJS (for the frontend), Rust (for the smart contracts), nodeJS + firebase (for the backend). The project's servers are deployed locally, but the final deploymend will be done on an instance of either AWS servers or Azure servers. 

### User stories
1. As a user I want to be able to Login in order to connect my wallet to the platform.
2. As a user I want to be able to Mint a ticket in order to participate in the lottery.
3. As a user I want to be able to Sell the nft in order to make profit despite not participating in the lottery anymore.
4. As a user I want impartiality (as in seeing how the extraction is done) in order to calm my stressful spirit.
5. As a user I want to be able to see the nfts that I own as a showcase.
6. As a visitor I want to be able to see the nfts that are already minted as a showcase..

7. As a backend developer I want some time to learn Node JS in order to be able to create the backend of the project.
8. As a backend developer I want some time to build the server side of Login functionality.
9. As a backend developer I want some time to build the Database architecture and to link it to the server in order to store user information.


10. As a frontend developer I want some time to learn ReactJS so I can create the frontend of the project.
11. As a frontend developer I want some time to build the landing page of the site, the mint page, the showcase page and the general design of the application.


12. As a blockchain developer I want some time to learn Solidity and blockchain protocols.
13. As a blockchain developer I want some time to create the smart contracts that will store the minted tokens on chain.

### Backlog:
For generating and managing the backlog we used trello: https://trello.com/b/g7e7RBmk/agile-sprint-board
### Source control:
For source control we used GitHub. The frontend of the application is hosted at this repository https://github.com/Ilie-Tudor/BPOF/tree/v0.01 . The smart contract are deployed on chain and therefore publicly visible and the backend rng server code will just be showcased on a private GitHub account/ locally, because the future application security depends on the fact that the server code is not public.


### Bug Reporting:
1. One bug that we encountered was found in the Eleven Dapp template while connecting with one of the wallets. The elrond web wallet was connecting with the appplication but the mint functionality wasn't sending the transactions on chain, so the user actions couldn't be saved. We found that this was caused by an lately released version of the erdjs api from elrond, that changed some of the interaction logic with the wallet.


### Build Tool:
The build tool we used was the one that comes with the nextJS framework. It creates the static files ready to be deployed on a web server from the TS source code.


