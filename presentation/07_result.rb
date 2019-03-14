# frozen_string_literal: true

module Result
  class Ok
    def initialize(value)
      @value = value
    end

    def ok?
      true
    end

    def error?
      false
    end

    def value!
      @value
    end

    def error
      nil
    end
  end

  class Err
    attr_reader :error

    def initialize(error)
      @error = error
    end

    def ok?
      false
    end

    def error?
      true
    end

    def value!
      raise "Can't get value from Err"
    end
  end
end

def Ok(value)
  Result::Ok.new(value)
end

def Err(error)
  Result::Err.new(error)
end

def ruby_magic
  Ok("ok!")
end

res = ruby_magic
puts "It is #{res.value!}" if res.ok?






