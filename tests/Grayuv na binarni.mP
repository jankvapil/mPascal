begin
  writeln;

  for i:=0 to 15 do begin b:=i; a:=i/2;
                          while a do begin c:=b; d:=a; e:=1; b:=0; 
                            while c do begin if c mod 2 xor d mod 2 then b:=b+e; c:=c/2; d:=d/2; e:=2*e end; a:=a/2
                    end;
                write('  '); write(bin(i):5); write(' '); write(bin(b):5); write(b:4);

         ii:=16+i; b:=ii; a:=ii/2;
         while a do begin c:=b; d:=a; e:=1; b:=0; 
                          while c do begin if c mod 2 xor d mod 2 then b:=b+e; c:=c/2; d:=d/2; e:=2*e end; a:=a/2
                    end;
            write('   '); write(bin(ii):5); write(' '); write(bin(b):5); writeln(b:4);
 end;

  writeln
end.
