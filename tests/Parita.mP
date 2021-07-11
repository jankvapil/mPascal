begin
  write('Zadej cislo: ');
  // read(a);
  a:=4;
  p:=0; b:=a;
   
  repeat if b mod 2 then p:=p xor 1; b:=b/2; until b=0;
  writeln; write('  '); write(a); write(' '); write(bin(a)); 
  if p then writeln('  licha parita') else writeln('  suda parita');
  
  writeln;
end.
