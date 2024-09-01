# VALIDADOR DE CPF :white_check_mark: # 
***
### Funcionamento 💻 ###
Consiste em verificar se algum cpf preenchido é valido ou inválido, baseado em um código prédefinido que captura os 9 primeiros digitos do cpf informado, e os multiplica aos 9 primeiros digitos da ordem decrescente começando do número 10 até o número 2.
Depois é somado o resultado das multiplicações, e usa esse resultado nessa formula: 11-(resultado da soma % 11). essa fórmula possibilita acharmos o primeiro digito do cpf (10º número do cpf), e já podemos ir verificando se esse número
corresponde ao 10º número do cpf informado.

ex: Cpf informado = 265.272.134-84
##### Fórmula: #####   
Cpf | X | Numero | Resultado
:---:|:---:|:---:|:---:
2 | X | 10 | 20
6 | X | 9 | 54
5 | X | 8 | 40
2 | X | 7 | 14
7 | X | 6 | 42
2 | X | 5 | 10
1 | X | 4 | 4
3 | X | 3 | 9
4 | X | 2 | 8
##### Soma: 201 #####  
agora basta jogar nesta fórmula: 11-(201 % 11) = 8 
percebe-se que o resultado é o mesmo do 10º número informado, agora vamos para o proximo número.

Vamos pegar os 10 números formados e jogar na formula:

##### Fórmula: #####   
Cpf | X | Numero | Resultado
:---:|:---:|:---:|:---:
2 | X | 11 | 22
6 | X | 10 | 60
5 | X | 9 | 45
2 | X | 8 | 16
7 | X | 7 | 49
2 | X | 6 | 12
1 | X | 5 | 5
3 | X | 4 | 12
4 | X | 3 | 12
8 | X | 2 | 16
##### Soma: 249 #####  

11-(249 % 11) = 4 

O ultimo digito foi o número 4, formando então o cpf : 265.272.134-84, confimando assim que, o cpf gerado é válido, pois é o mesmo cpf que o informado.
***
### O Código :woman_technologist: ###

segue o vídeo abaixo

https://github.com/user-attachments/assets/8eb1c9c8-c116-44cd-bbef-6cc669f2a61d

***
### Programa em funcionamento :technologist: ###

https://github.com/user-attachments/assets/8466cffe-9e61-40ab-bef2-db569d93f7a2
***
GRATO POR SUA VISITA 😄
