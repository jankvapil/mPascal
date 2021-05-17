begin
  writeln;

  b:=0; a:=1; write(b:10); write(a:10); n:=2;

  repeat c:=a+b; b:=a; a:=c;
         if n mod 10 = 0 then writeln; write(a:10); n:=n+1;
  until n=45;

  writeln; writeln
end.
