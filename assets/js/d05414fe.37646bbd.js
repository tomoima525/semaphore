"use strict";(self.webpackChunk_semaphore_docs=self.webpackChunk_semaphore_docs||[]).push([[7],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,c=k["".concat(p,".").concat(m)]||k[m]||u[m]||r;return n?i.createElement(c,o(o({ref:t},d),{},{components:n})):i.createElement(c,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return k}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},p="libsemaphore",s={unversionedId:"libsemaphore",id:"version-V1/libsemaphore",title:"libsemaphore",description:"libsemaphore is a helper",source:"@site/versioned_docs/version-V1/libsemaphore.md",sourceDirName:".",slug:"/libsemaphore",permalink:"/docs/V1/libsemaphore",editUrl:"https://github.com/appliedzkp/semaphore/edit/main/versioned_docs/version-V1/libsemaphore.md",tags:[],version:"V1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-V1/mySidebar",previous:{title:"Contract API",permalink:"/docs/V1/contract-api"},next:{title:"Multi-party trusted setup",permalink:"/docs/V1/trustedsetup"}},d=[{value:"Available types, interfaces, and functions",id:"available-types-interfaces-and-functions",children:[{value:"Types",id:"types",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[],level:3},{value:"Functions",id:"functions",children:[],level:3}],level:2}],u={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"libsemaphore"},"libsemaphore"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/libsemaphore"},(0,r.kt)("inlineCode",{parentName:"a"},"libsemaphore"))," is a helper\nlibrary for Semaphore written in Typescript. Any dApp written in Javascript or\nTypescript should use it as it provides useful abstractions over common tasks\nand objects, such as identities and proof generation."),(0,r.kt)("p",null,"Note that only v1.0.14 and above works with the Semaphore code in this\nrepository. v0.0.x is compatible with the pre-audited Semaphore code."),(0,r.kt)("h2",{id:"available-types-interfaces-and-functions"},"Available types, interfaces, and functions"),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkBigInt"))),(0,r.kt)("p",null,"A big integer type compatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"snarkjs")," library. Note that it is not\nadvisable to mix variables of this type with ",(0,r.kt)("inlineCode",{parentName:"p"},"bigNumber"),"s or ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt"),"s.\nEncapsulates ",(0,r.kt)("inlineCode",{parentName:"p"},"snarkjs.bigInt"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EddsaPrivateKey"))),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8032"},"EdDSA")," private key which should be 32\nbytes long. Encapsulates a ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Buffer")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EddsaPublicKey"))),(0,r.kt)("p",null,"An EdDSA public key. Encapsulates an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkBigInt"),"s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkProvingKey"))),(0,r.kt)("p",null,"A proving key, which when used with a secret ",(0,r.kt)("em",{parentName:"p"},"witness"),", generates a zk-SNARK\nproof about said witness. Encapsulates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkVerifyingKey"))),(0,r.kt)("p",null,"A verifying key which when used with public inputs to a zk-SNARK and a\n",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkProof"),", can prove the proof's validity. Encapsulates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkWitness"))),(0,r.kt)("p",null,"The secret inputs to a zk-SNARK. Encapsulates an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkBigInt"),"s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkPublicSignals"))),(0,r.kt)("p",null,"The public inputs to a zk-SNARK. Encapsulates an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkBigInt"),"s."),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EddsaKeyPair"))),(0,r.kt)("p",null,"Encapsulates an ",(0,r.kt)("inlineCode",{parentName:"p"},"EddsaPublicKey")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"EddsaPrivateKey"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EddsaKeyPair {\n  pubKey: EddsaPublicKey\n  privKey: EddsaPrivateKey\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Identity"))),(0,r.kt)("p",null,"Encapsulates all information required to generate an identity commitment, and\nis crucial to creating ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkProof"),"s to broadcast signals."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Identity {\n  keypair: EddsaKeyPair\n  identityNullifier: SnarkBigInt\n  identityTrapdoor: SnarkBigInt\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnarkProof"))),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastSignal()")," accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256[8]")," array for its ",(0,r.kt)("inlineCode",{parentName:"p"},"_proof"),"\nparameter. See ",(0,r.kt)("inlineCode",{parentName:"p"},"genBroadcastSignalParams()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface SnarkProof {\n  pi_a: SnarkBigInt[]\n  pi_b: SnarkBigInt[][]\n  pi_c: SnarkBigInt[]\n}\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genPubKey(privKey: EddsaPrivateKey): EddsaPublicKey"))),(0,r.kt)("p",null,"Generates a public EdDSA key from a supplied private key. To generate a private\nkey, use ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto.randomBytes(32)")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto")," is the built-in Node or\nbrowser module."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genIdentity(): Identity"))),(0,r.kt)("p",null,"This is a convenience function to generate a fresh and random ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),". That\nis, the 32-byte private key for the ",(0,r.kt)("inlineCode",{parentName:"p"},"EddsaKeyPair")," is randomly generated, as\nare the distinct 31-byte identity nullifier and the 31-byte identity trapdoor\nvalues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"serialiseIdentity(identity: Identity): string"))),(0,r.kt)("p",null,"Converts an ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity")," into a JSON string which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'["e82cc2b8654705e427df423c6300307a873a2e637028fab3163cf95b18bb172e","a02e517dfb3a4184adaa951d02bfe0fe092d1ee34438721d798db75b8db083","15c6540bf7bddb0616984fccda7e954a0fb5ea4679ac686509dc4bd7ba9c3b"]\n')),(0,r.kt)("p",null,"You can also spell this function as ",(0,r.kt)("inlineCode",{parentName:"p"},"serializeIdentity"),"."),(0,r.kt)("p",null,"To convert this string back into an ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"unSerialiseIdentity()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"unSerialiseIdentity(string: serialisedId): Identity"))),(0,r.kt)("p",null,"Converts the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," output of ",(0,r.kt)("inlineCode",{parentName:"p"},"serialiseIdentity()")," to an ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),"."),(0,r.kt)("p",null,"You can also spell this function as ",(0,r.kt)("inlineCode",{parentName:"p"},"unSerializeIdentity"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genIdentityCommitment(identity: Identity): SnarkBigInt"))),(0,r.kt)("p",null,"Generates an identity commitment, which is the hash of the public key, the\nidentity nullifier, and the identity trapdoor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"async genProof(witness: SnarkWitness, provingKey: SnarkProvingKey): SnarkProof"))),(0,r.kt)("p",null,"Generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkProof"),", which can be sent to the Semaphore contract's\n",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastSignal()")," function. It can also be verified off-chain using\n",(0,r.kt)("inlineCode",{parentName:"p"},"verifyProof()")," below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genPublicSignals(witness: SnarkWitness, circuit: SnarkCircuit): SnarkPublicSignals"))),(0,r.kt)("p",null,"Extracts the public signals to be supplied to the contract or ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyProof()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"verifyProof(verifyingKey: SnarkVerifyingKey, proof: SnarkProof, publicSignals: SnarkPublicSignals): boolean"))),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," is valid, given the correct verifying key\nand public signals."),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"signMsg(privKey: EddsaPrivateKey, msg: SnarkBigInt): EdDSAMiMcSpongeSignature)"))),(0,r.kt)("p",null,"Encapsualtes ",(0,r.kt)("inlineCode",{parentName:"p"},"circomlib.eddsa.signMiMCSponge")," to sign a message ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," using private key ",(0,r.kt)("inlineCode",{parentName:"p"},"privKey"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"verifySignature(msg: SnarkBigInt, signature: EdDSAMiMcSpongeSignature, pubKey: EddsaPublicKey)"),": boolean")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the cryptographic ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," of the signed ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," is from the\nprivate key associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"pubKey"),"."),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"setupTree(levels: number, prefix: string): MerkleTree"))),(0,r.kt)("p",null,"Returns a Merkle tree created using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/semaphore-merkle-tree"},(0,r.kt)("inlineCode",{parentName:"a"},"semaphore-merkle-tree")),"\nwith the same number of levels which the Semaphore zk-SNARK circuit expects.\nThis tree is also configured to use ",(0,r.kt)("inlineCode",{parentName:"p"},"MimcSpongeHasher"),", which is also what the\ncircuit expects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levels")," sets the number of levels of the tree. A tree with 20 levels, for\ninstance, supports up to 1048576 deposits."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genCircuit(circuitDefinition: any)"))),(0,r.kt)("p",null,"Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"new snarkjs.Circuit(circuitDefinition)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"circuitDefinition"),"\nobject should be the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"d result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"circom")," command which\nconverts a ",(0,r.kt)("inlineCode",{parentName:"p"},".circom")," file to a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"async genWitness(...)"))),(0,r.kt)("p",null,"This function has the following signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const genWitness = async (\n    signal: string,\n    circuit: SnarkCircuit,\n    identity: Identity,\n    idCommitments: SnarkBigInt[] | BigInt[] | ethers.utils.BigNumber[],\n    treeDepth: number,\n    externalNullifier: SnarkBigInt,\n)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signal")," is the string you wish to broadcast."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"circuit")," is the output of ",(0,r.kt)("inlineCode",{parentName:"li"},"genCircuit()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identity")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Identity")," whose identity commitment you want to prove is\nin the set of registered identities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idCommitments")," is an array of registered identity commmitments; i.e. the\nleaves of the tree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"treeDepth")," is the number of levels which the Merkle tree used has"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"externalNullifier")," is the current external nullifier")),(0,r.kt)("p",null,"It returns an object as such:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"witness"),": The witness to pass to ",(0,r.kt)("inlineCode",{parentName:"li"},"genProof()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signal"),": The computed signal for Semaphore. This is the hash of the\nrecipient's address, relayer's address, and fee."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signalHash"),": The hash of the computed signal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg"),": The hash of the external nullifier and the signal hash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature"),": The signature on the above msg."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tree"),": The Merkle tree object after it has been updated with the identity commitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identityPath"),": The Merkle path to the identity commmitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identityPathIndex"),": The leaf index of the identity commitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identityPathElements"),": The elements along the above Merkle path")),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"witness")," is essential to generate the proof; the other data is only\nuseful for debugging and additional off-chain checks, such as verifying the\nsignature and the Merkle tree root."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"formatForVerifierContract = (proof: SnarkProof, publicSignals: SnarkPublicSignals"))),(0,r.kt)("p",null,"Converts the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"publicSignals")," to strings and rearranges\nelements of ",(0,r.kt)("inlineCode",{parentName:"p"},"proof.pi_b")," so that ",(0,r.kt)("inlineCode",{parentName:"p"},"snarkjs"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"verifier.sol")," will accept it.\nTo be specific, it returns an object as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    a: [ proof.pi_a[0].toString(), proof.pi_a[1].toString() ],\n    b: [\n         [ proof.pi_b[0][1].toString(), proof.pi_b[0][0].toString() ],\n         [ proof.pi_b[1][1].toString(), proof.pi_b[1][0].toString() ],\n    ],\n    c: [ proof.pi_c[0].toString(), proof.pi_c[1].toString() ],\n    input: publicSignals.map((x) => x.toString()),\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"stringifyBigInts = (obj: any) => object"))),(0,r.kt)("p",null,"Encapsulates ",(0,r.kt)("inlineCode",{parentName:"p"},"snarkjs.stringifyBigInts()"),". Makes it easy to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkProof"),"s to JSON."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"unstringifyBigInts = (obj: any) => object"))),(0,r.kt)("p",null,"Encapsulates ",(0,r.kt)("inlineCode",{parentName:"p"},"snarkjs.unstringifyBigInts()"),". Makes it easy to convert JSON to ",(0,r.kt)("inlineCode",{parentName:"p"},"SnarkProof"),"s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"genExternalNullifier = (plaintext: string) => string"))),(0,r.kt)("p",null,"Each external nullifier must be at most 29 bytes large. This function\nkeccak-256-hashes a given ",(0,r.kt)("inlineCode",{parentName:"p"},"plaintext"),", takes the last 29 bytes, and pads it\n(from the start) with 0s, and returns the resulting hex string."))}k.isMDXComponent=!0}}]);