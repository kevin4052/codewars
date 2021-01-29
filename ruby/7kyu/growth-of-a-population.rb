# https://www.codewars.com/kata/563b662a59afc2b5120000c6/ruby
# -----------my solution-----------
def nb_year(p0, percent, aug, p)
    i = 0;
    
    begin
      p0 = (p0 * (1 + percent.to_f / 100) + aug).to_i;
      i += 1;
    end while p0 < p
    
    return i;
end

# -----------best practice-----------
def nb_year(p0, percent, aug, p)
    # your code
    n = 0
    percent = percent * 0.01
    
    while p0 < p
      p0 += (p0 * percent).to_i + aug
      n += 1
    end

    return n
end