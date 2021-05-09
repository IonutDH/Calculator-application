Programul primeste niste parametrii pe lina de comanda si executa o anumita operatie care se gaseste in help, ce poate fi 
accesata prin comanda "help" sau prin executarea programului fara niciun parametru. In functie de operatorul introdus la 
finalul linii de comanda, programul apeleaza functia corespunzatore operatiei dupa ce trece printr-un switch. Preluearea 
valorilor din linia de comanda se face prin functia "process.argv" care ulterior sunt convertite in date de tip float prin 
functia "parseFloat()". La fiecare functie se testeaza daca este introdus un numar minim de parametrii, iar in caz contrar, 
se va afisa o eroare.