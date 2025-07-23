# Visibility Specifiers

In Solidity, visibility specifiers are used to control the accessibility of functions and state variables within smart contracts. These specifiers determine who can access these elements and from where.

There are four main visibility specifiers:

- `public`
- `private`
- `internal`
- `external`

> **Note:** For **variables**, only three visibility specifiers are used: `public`, `private`, and `internal`.

---

## Public

`public` functions or variables can be accessed from **outside** the contract as well as from **within**.  
They are commonly used for functions that need to be accessible externally, such as entry points to the contract.

> ✅ One notable thing about Solidity is that the **default visibility** specifier is `public`.

---

## Internal

`internal` functions or variables are accessible **within the contract** as well as from **derived contracts**.  
They **cannot** be accessed externally (i.e., from outside the contract hierarchy).

---

## Private

`private` functions or variables are **only accessible** from **within the contract** that defines them.  
They **cannot** be accessed from outside the contract or from derived contracts.

---

## External

In Solidity, the `external` visibility specifier restricts the calling of a function to **external sources**.  
It **cannot** be called from within the same contract — only from **outside** the contract or by a **third party**.

> 🚫 `external` visibility **can only be assigned to functions**, not variables.

When a function is marked as `external`, it is accessible from **other contracts** but **not from within** the contract that defines it.  
This makes it suitable for functions that need to be called by **other contracts**, but not by the contract itself.
