begin
  writeln; writeln('    Prvocisla do 1000');
  
  writeln; write(2:5); n:=1;

  cislo:=3;
  repeat prvocislo:=true;
         delitel:=3;
         while prvocislo and delitel*delitel<=cislo do
           begin if cislo mod delitel = 0 then prvocislo:=false else delitel:=delitel+2 end;
         if prvocislo then begin if n mod 10 =0 then writeln;
                                 write(cislo:5); n:=n+1 end;
         cislo:=cislo+2;
  until cislo>1000;

  writeln; writeln;
end.
