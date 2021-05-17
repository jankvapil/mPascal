begin
  writeln; writeln('        Vypis ASCII tabulky'); writeln;

  write('    '); for i:=0 to 15 do begin write(' '); write(hex(i)) end; writeln;
  write('   '); for i:=0 to 34 do write('-');

  znak:=ord(' ');
  repeat
    writeln; write(' '); write(hex(znak):2); write('|');
    for j:=0 to 15 do write(chr(znak+j):2);
    write(' |');
    znak:=znak+16;
  until znak>255;

  writeln; write('   '); for i:=0 to 34 do write('-');

  writeln; writeln
end.
