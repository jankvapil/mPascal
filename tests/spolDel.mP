begin
  write('Zadej 2 prirozena cisla: ');
  // read(a); read(b);
  a:=4;
  b:=2;
  
  if a<1 or b<1 then writeln('  Chybna cisla')

  else begin repeat zbytek:=a mod b; a:=b; b:=zbytek; until zbytek=0;
             writeln; write('  Nejvetsi spolecny delitel: '); writeln(a); end;
  writeln;
end.
