begin
  writeln;

  for I:=0 to 15 do begin a:=i; b:=i/2; c:=1; g:=0; 
                          while a do begin if a mod 2 xor b mod 2 then g:=g+c; a:=b; b:=b/2; c:=2*c end;  
                          write (' '); write(i:4); write (' '); write(bin(i):4); write('  '); write(bin(g):4);

               J:=16+i; a:=j; b:=j/2; c:=1; g:=0;
               while a do begin if a mod 2 xor b mod 2 then g:=g+c; a:=b; b:=b/2; c:=2*c end;  
               write(j:5); write (' '); write(bin(j):5); write (' ');  writeln(bin(g):5)
    end;

  writeln;
end.
