begin
  citac:=0;

  for sirka:=0 to 10 do begin for odsazeni:=sirka to 15 do write(' ');
                              for hvezdicky:=1 to citac-1 do write('*');                  
                              writeln;
                              citac:=citac+2 end;
     
  writeln;
  
end.
