import React, { useMemo, useState } from "react";
import { Flex } from "components/Box";

const factorial = (n: number) => (n <= 1 ? 1 : n * factorial(n - 1));

const factTrigger = (number) => {
  console.log("I am going to calculate factorial now 😛");

  return factorial(number);
};

const MemoExample: React.FC = () => {
  const [number, setNumber] = useState(3);
  const [random, setRandom] = useState(0.9);

  const fact = useMemo(() => factTrigger(number), [number]);

  // const fact = factTrigger(number);

  return (
    <Flex flexDirection="column" mr={["8px", 0]}>
      <h1>
        {number}! = {fact}
      </h1>

      <h1>Random: {random}</h1>
      <br />
      <div>
        <button onClick={() => setNumber(Math.floor(Math.random() * 10))}>
          Change Number
        </button>
        <button onClick={() => setRandom(Math.random())}>Change Random</button>
      </div>
    </Flex>
  );
};

export default MemoExample;
