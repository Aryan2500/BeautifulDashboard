// Breadcrumb.jsx
const Breadcrumb = ({ items }) => {
    return (
        <nav className="bg-neutral-900   p-3 rounded-md shadow">
            <ol className="list-none  inline-flex">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <>
                                <a href={item.href} className="text-gray-400 hover:text-gray-500">{item.label}</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
