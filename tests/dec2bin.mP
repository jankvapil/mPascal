begin
  write(' Zadej nezaporne cislo: ');
  // read(a);
  a:=42
  writeln;

  if a<0 then writeln('  Chybne cislo')

  else begin write(' binarni: '); writeln(bin(a):12);
             writeln; write(' hexadecimalni: '); writeln(hex(a)); end;
			 
  writeln;

end.
