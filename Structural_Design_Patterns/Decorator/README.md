- allows us to add responsibilities to an Object at runtime
- Problem statement:
class Computer (base class)
class ComputerWithPrinter (subclass) (these objects are not reusable)
class ComputerWithMic (subclass)
- what about ComputerWithPrinterAndMic ?

- Solution:
class Computer (base class)
class ComputerComponent (subclass)
- this is the 'decorator'. It models a feature that can be added to it's Computer base class. Then we can have a Printer decorator or a Mic decorator
class ComputerConcrete (subclass)
- represents a computer (laptop, PC)

The difference is that the decorator class also holds a reference to the Computer, so it's not a real computer, it's actually a computer feature, that holds a reference to the actual computer that it decorates.

class Printer (subclass of ComputerComponent)
class Mic     (subclass of ComputerComponent)

> This does not need usage of TS decorator experimental feature