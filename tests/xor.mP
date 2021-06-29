begin
  a:=1;
  if a xor a then writeln('chybne') else writeln('spravne');
  if not a xor not a then writeln('chybne') else writeln('spravne');
  if a xor not a then writeln('spravne') else writeln('chybne');
  if not a xor a then writeln('spravne') else writeln('chybne');

  if a or a then writeln('spravne') else writeln('chybne');
  if not a or not a then writeln('chybne') else writeln('spravne');
  if a or not a then writeln('spravne') else writeln('chybne');
  if not a or a then writeln('spravne') else writeln('chybne');

end.
